import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main class="home center about whats-on">
        <h1>${entry.getIn(["data", "title"], null)}</h1>

        ${this.props.widgetFor("body")}
      </main>
    `;
  }
});

export default Page;
