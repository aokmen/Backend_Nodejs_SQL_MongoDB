/* -------------------------------------------------------------------------- */
/*                            BlogApi Error Handler                           */
/* -------------------------------------------------------------------------- */

'use strict'

module.exports = (err,req,res,next) => {

    // errorStatusCode = res.errorStatusCode

    res.status(res.errorStatusCode).send({
        error:true,
        message: err.message,
        cause: err.cause,
        body: req.body
    })
}
