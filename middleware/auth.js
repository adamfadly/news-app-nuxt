export default function(context) {
  if (!context.store.getters.isAuntheticated) {
    context.redirect('/login')
    console.log('no token')
  }
}
