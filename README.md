# gitbook-plugin-googlemaps-place-embed

For use with [Gitbook.com](https://gitbook.com), or [gitbook-cli](https://github.com/gitbookio/gitbook-cli).

This plugin implements a filter:

Input:

`{{ "https://www.google.co.nz/maps/place/Wellington/@-41.244027,174.6217711,11z/data=!3m1!4b1!4m5!3m4!1s0x6d38b1fc49e974cb:0xa00ef63a213b470!8m2!3d-41.2864603!4d174.776236?hl=en" | placeMap }}`

Output:

![Screenshot of plugin output](https://raw.githubusercontent.com/joshmcarthur/gitbook-googlemaps-place-embed/branch/master/doc/output.jpg)

If the URL is not recognised, it will return the passed in content unaltered. The plugin is, however, permissive of different TLDs (.co.nz, .com, .com.au, etc). 

### Development

1. Make your changes
2. Run the tests, ensure that you add a unit test if you have added/changed behaviour (`npm run test`).
3. Run the integration tests if you have the environment to do so

### Support

I'm unlikely to provide a lot of support for this plugin, use with caution. It's a simple enough implementation though, and given an appropriately descriptive issue description, I may be able to help.

### License

MIT. See LICENSE
