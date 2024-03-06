/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Primary-Color': '#5C8374',
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
    content: [
      // ...
      'node_modules/flowbite-react/lib/esm/**/*.js'
    ]

  }
}
