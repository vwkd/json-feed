import { Feed } from "../src/main.ts";
import { assertEquals } from "@std/assert";

Deno.test("three items", () => {
  const info = {
    title: "Example Feed",
    home_page_url: "https://example.org",
    feed_url: "https://example.org/feed.json",
  };

  const feed = new Feed(info);
  
  const items = [
    {
      id: "1",
      content_html: "<p>foo</p>",
      url: "https://example.org/foo",
    },
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
  ]

  feed.add(...items);

  const version = "https://jsonfeed.org/version/1.1";
  const expected = {
    version,
    ...info,
    items,
  }

  assertEquals(feed.toJSON(), JSON.stringify(expected));
})
