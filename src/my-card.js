import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  
  static get tag() {

    return 'my-card';

  }

  constructor() {
    super();
    this.title = "Featuring Shrek!";
    this.imageSrc = "https://i.pinimg.com/736x/12/82/1a/12821aef23d6a0615e08d056bf5018e1.jpg";
    this.detailsLink = "https://hax.psu.edu";
    this.linkText = "SHREK THE MUSICAL!!!";
    this.linkUrl = "https://youtu.be/j6eibFYnlF4?si=_mha706_XK0JDo4G";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .card {
        background-color: green;
        padding: 20px;
        margin: 10px;
        border-radius: 5px;
        width: 450px;
        text-align: center;
        border-radius: 32px;
      }
      .card img {

        width: 300px;
        padding: 10px 0px;
      }
      .cool {
        font-size: 16px;
        color: white;
        text-decoration: none;
      }
      #details {

        background-color: black;
        color: white;
        padding: 2px 16px 1vh;
        border-radius: 10px;
        font-size: 32px;
        margin-top: 10px;
        display: block;
      }
    `;
  }

  render() {

    return html`
      <div class="container">
        <div class="card">
          <img src="${this.imageSrc}" class="card-image">
          <div></div>
            <a href="${this.linkUrl}" class="cool">${this.linkText}</a>
          </div>
          <a id="details" href="${this.detailsLink}">Details</a>
          <h3 class="card-title">${this.title}</h3>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imageSrc: { type: String },
      detailsLink: { type: String },
      linkText: { type: String },
      linkUrl: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
