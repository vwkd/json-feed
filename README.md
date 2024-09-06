# README

JSON Feed



## Features

- create JSON Feed Version 1.1
- add one or more items
- serialize to JSON



## Usage

```js
import { Feed } from "@vwkd/feed";

const feed = new Feed({
  title: "Example Feed",
  home_page_url: "https://example.org",
  feed_url: "https://example.org/feed.json",
});

feed.add({
  id: "1",
  content_html: "<p>foo</p>",
  url: "https://example.org/foo",
});

feed.add(...[
  {
    id: "2",
    content_text: "bar",
    url: "https://example.org/bar",
  },
  {
    id: "3",
    content_html: "<p>foo</p>",
    content_text: "bar",
    url: "https://example.org/foobar",
  },
]);

console.log(feed.toJSON());
```



## Resources

- [JSON Feed Version 1.1](https://www.jsonfeed.org/version/1.1/)
