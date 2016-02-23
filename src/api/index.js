import "babel-polyfill";
import Koa from "koa";
import KoaRouter from "koa-router";
import Roles from 'koa-roles';
import cors from 'kcors';
// Koa application is now a class and requires the new operator.
const app = new Koa();
const router = KoaRouter();
app.use(cors());
// uses async arrow functions
// app.use(async (ctx, next) => {
  
//   try {
//     await next() // next is now a function
//   } catch (err) {
//     ctx.body = { message: err.message }
//     ctx.status = err.status || 500
//   }
// });


router.get('/',async function (ctx, next) {

	ctx.body={
		hello:"world"
	};//"Hello World From API";
});



// app.use(async ctx => {
//   const user = await User.getById(ctx.session.userid) // await instead of yield
//   ctx.body = user // ctx instead of this
// });

app
  .use(router.routes())
  .use(router.allowedMethods());

console.log("API is listening 3000 port");
app.listen(3000);
