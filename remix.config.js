module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  routes(defineRoutes) {
    return defineRoutes(route => {
      if (process.env.ENABLE_TEST_ROUTES) {
        route('/__tests/login', '__test_routes__/login.tsx')
      }
    })
  },
}
