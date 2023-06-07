const { catchAsyncError, ServerError } = require("../error");
const { prisma } = require("../db")
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
const { sendHtmlEmail } = require("../email")

exports.createBooking = catchAsyncError(async (req, res, next) => {
  if (!req.body.date) {
    return next(new ServerError(400, "date not supplied"))
  }

  const bookingDate = dayjs(req.body.date, "DD-MM-YYYY", true)

  if (dayjs().isAfter(bookingDate)) {
    return next(new ServerError(400, "please book in future available date"))
  }

  const asstesIds = req.body.items.map((i) => {
    return i.id
  })

  const assets = await prisma.assets.findMany({
    where: {
      id: { in: asstesIds },
    }
  })

  if (assets.length !== req.body.items.length) {
    return next(new ServerError(400, "some invalid assets selected"))
  }

  assets.forEach((a) => {
    req.body.items.forEach((i) => {
      if (i.id === a.id) {
        a.quantity = i.quantity
      }
    })
  })

  try {
    const booking = await prisma.bookings.create({
      data: {
        user_id: req.user.id,
        date: bookingDate.$d,
        assets,
      }
    })

    let bookedItems = "<table><tr > <th>Name</th> <th>Price</th>   <th>Quantity</th>  </tr> "
    let totalPrice = 0
    assets.forEach((a) => {
      bookedItems = bookedItems + `<tr><td>${a.name}</td> <td>${a.price}</td> <td>${a.quantity}</td> </tr>`
      totalPrice += a.price * a.quantity
    })
    bookedItems = bookedItems + "</table>"

    const msg = `<!DOCTYPE html>   <html>    <head>    <style>    table {      font-family: arial, sans-serif;      border-collapse: collapse;      width: 100%;    }        td, th {      border: 1px solid #dddddd;      text-align: left;      padding: 8px;    }        tr:nth-child(even) {      background-color: #dddddd;    }    </style>    </head>    <body><p><strong>Hello,</strong></p><p><strong>Dear ${req.user.name},</strong></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Your booking on <b>${req.body.date} </b>is successfull for </p> ${bookedItems} <p>in price <strong>${totalPrice}.</strong>&nbsp;</p> </body>   </html>`

    await sendHtmlEmail(req.user.email, "Lawn Booking", msg)

    res.json({
      message: "booking successful",
      booking,
      totalPrice
    })
  } catch (e) {
    if (e.code === 'P2002') {
      return next(new ServerError(400, 'date of booking is not available'))
    }
    return next(new ServerError(400, e.message))
  }
})