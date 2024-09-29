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
    this.fancy = false;
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
        box-sizing: border-box;
      }
      .card img {
        max-width: 100%;
        max-height: 300px;
        width: auto;
        height: auto;
        padding: 10px 0px;
        object-fit: cover;
        border-radius: 10px;
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
      .card-title {
        font-size: 24px;
        margin-top: 10px;
        color: white;
        text-transform: uppercase;
      }
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
    `;
  }

  openChanged(e) {
    const isOpen = e.target.open;
    if (isOpen) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {

    return html`
      <div class="container">
        <div class="card">
          <img src="${this.imageSrc}" class="card-image" alt="Card Image">
          <details @toggle="${this.openChanged}">
            <summary>The best and only musical you'll ever need to see</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
            <slot>${this.text}</slot>
          </details>
          <a href="${this.linkUrl}" class="cool">${this.linkText}</a>
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
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
