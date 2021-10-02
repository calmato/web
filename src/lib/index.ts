import { OGPContent, OGPContentResult } from "../types/lib/ogp";
import { JSDOM } from "jsdom";

export function extractURL(text: string): string[] {
  const result = text.match(/((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g);
  return result ? result.map((item) => item.toString()) : [];
}

export async function getOGPContent(url: string): Promise<OGPContentResult> {
  try {
    const res = await fetch(url);
    const jsdom = new JSDOM(await res.text());
    const elements = jsdom.window.document.head.querySelectorAll("meta");

    const ogpContent: OGPContent = { id: url };

    Array.from(elements)
      .filter((element) => element.hasAttribute("property"))
      .forEach((element) => {
        const prop = element.getAttribute("property");
        switch (prop) {
          case "og:title":
            const title = element.getAttribute("content");
            if (title) {
              ogpContent.title = title;
            }
            break;
          case "og:image":
            const image = element.getAttribute("content");
            if (image) {
              ogpContent.image = image;
            }
            break;
          default:
            break;
        }
      });

    return Promise.resolve({
      result: true,
      content: ogpContent,
    });
  } catch (e) {
    console.log(e);
    return Promise.reject({
      result: false,
    });
  }
}
