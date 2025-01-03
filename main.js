const buttons = document.querySelectorAll('#content--btn-container button');
const image = document.getElementById('content--image');
const contentHeading = document.getElementById('content--heading');
const contentParagraph = document.getElementById('content--paragraph');
const contentLink = document.getElementById('content--link');
const contentLinkText = document.getElementById('content--link-text');

let currentSelectedButtonIndex = 0;
const ImageDirectoryPath = 'public/';

const imageData = [
  {
    index: 0,
    imageFileName: 'product_documentation.svg',
    contentHeading: 'Product documentation',
    contentParagraph: 'Learn how to spin up a virtual machine, get started with block storage, and more with in-depth documentation.',
    contentLink: '#',
    contentLinkText: 'Read the docs',
  },
  {
    index: 1,
    imageFileName: 'business_advice.svg',
    contentHeading: 'Business advice',
    contentParagraph: "The Wave is DigitalOcean's hub for startup and business-focused content on funding, hiring, and scaling",
    contentLink: '#',
    contentLinkText: 'Level up your business',
  },
  {
    index: 2,
    imageFileName: 'technical_expertise.svg',
    contentHeading: 'Technical expertise',
    contentParagraph:
      "Visit DigitalOcean's Community Website and <a href='https://css-tricks.com' target='_blank' class='underline text-blue-500'>CSS-Tricks</a> to learn from a wide range of technical tutorials.",
    contentLink: '#',
    contentLinkText: 'Read the docs',
  },
];

function showContent(e) {
  const buttonIndex = [...buttons].findIndex((item) => item === e.target);
  if (currentSelectedButtonIndex === buttonIndex) return;

  [...buttons].forEach((item) => {
    if (item.classList.contains('selected')) item.classList.remove('selected');
  });

  e.target.classList.add('selected');
  currentSelectedButtonIndex = buttonIndex; // update the the currentIndex
  const data = imageData[buttonIndex];
  image.src = ImageDirectoryPath + data.imageFileName;
  contentHeading.innerHTML = data.contentHeading;
  contentParagraph.innerHTML = data.contentParagraph;
  contentLink.href = data.contentLink;
  contentLinkText.innerHTML = data.contentLinkText;
}

[...buttons].forEach((item) => item.addEventListener('click', showContent));
