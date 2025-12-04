# background-gradient-generator
🌈 Gradient Generator UI

A sleek and interactive tool for generating CSS linear-gradients.
Click the two color buttons to randomize colors and instantly preview a new gradient (and copy the CSS!).

🚀 Features

✔️ Generate random hex colors
✔️ Live gradient background preview
✔️ Automatically updates the preview CSS
✔️ Clean UI with frosted-glass code box
✔️ No dependencies — fully vanilla JS

📂 Project Structure
root
│── index.html
│── styles.css
└── script.js


index.html — UI layout and structure
styles.css — Styling, colors, fonts, gradient background
script.js — Core logic: random hex color + live gradient update

🧠 How It Works
🔹 Generate random hex color
let values = "0123456789abcdef";
let color = "#";
for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
}

🔹 Update gradient live
document.body.style.backgroundImage =
  `linear-gradient(to right, ${rgb1}, ${rgb2})`;

🔹 Update displayed CSS
copyDiv.innerHTML =
  `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;

🖱 Usage

Download or clone this repository:

git clone https://github.com/javinarora05/background-gradient-generator.git


Open index.html in your browser.

Click the left or right color button to generate new colors.

Copy the displayed CSS and use it in your own project.

🌟 Demo (Optional)

Add a GitHub Pages link after deploying:

https://javinarora05.github.io/background-gradient-generator/

🛠 Built With

HTML5

CSS3

JavaScript (Vanilla)

No frameworks. No libraries. Blazing fast.

🧩 Future Improvements

 Add copy-to-clipboard button

 Add gradient direction selector

 Add color locking

 Add history of generated gradients

 Add ability to manually enter hex codes

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.

📄 License

This project is open source.
You may modify and use it freely.
