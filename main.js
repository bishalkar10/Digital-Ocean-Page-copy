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

buttons.forEach((item) => item.addEventListener('click', showContent));

const quoteData = [
  {
    index: 0,
    quote:
      'Creating a first-of-its-kind video platform as a startup is a near impossible task without partners that are not only tremendously talented, but have the same forward thinking as you do. DigitalOcean has helped us go from architecture to launch by pairing us with strategic partners who are like-minded and innovative.',
    authorName: 'Denny Darmo,',
    authorImage: 'denny_darmo.png',
    authorTitle: 'Founder and CEO, Snipitz',
    companyLogoPath: 'snipitz_logo.svg',
    fullImagePath: 'snipitz_full.png',
  },
  {
    index: 1,
    quote: 'The cost of running ScraperAPI would be 250% more on AWS, as compared to DigitalOcean.',
    authorName: 'Zoltan Bettenbuk,',
    authorImage: 'zoltan_bettenbuk.png',
    authorTitle: 'CTO, ScraperAPI',
    companyLogoPath: 'scraperapi_logo.svg',
    fullImagePath: 'scraperapi_full.png',
  },
  {
    index: 2,
    quote:
      "The high availability control plane is a great addition, as it means we can be even more confident in the availability of hardware provided by you. We've never had an availability issue from DigitalOcean.",
    authorName: 'Stephen Lazarionok,',
    authorImage: 'stephen_lazarionok.png',
    authorTitle: 'Co-Founder, CTO, Zingbrain AI',
    companyLogoPath: 'zing_logo.png',
    fullImagePath: 'zing_full.png',
  },
  {
    index: 3,
    quote:
      "We soon found out that the service we received from DigitalOcean was the best in terms of stability of the Droplets and the bandwidth, and all of the network that comes out of the data centers. It's very stable. This is the key point, and that stability has helped us to increase our volume as well.",
    authorName: '',
    authorImage: '',
    authorTitle: '',
    companyLogoPath: 'bright_data_logo.svg',
    fullImagePath: 'bright_data_full.png',
  },
  {
    index: 4,
    quote:
      "We soon found out that the service we received from DigitalOcean was the best in terms of stability of the Droplets and the bandwidth, and all of the network that comes out of the data centers. It's very stable. This is the key point, and that stability has helped us to increase our volume as well.",
    authorName: '',
    authorImage: '',
    authorTitle: '',
    companyLogoPath: 'nitropack_logo.svg',
    fullImagePath: 'nitropack_full.png',
  },
];

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const navDots = document.querySelectorAll('#nav-dot-container span');
const quoteText = document.getElementById('quote--text');
const authorImage = document.getElementById('author--image');
const authorName = document.getElementById('author--name');
const authorTitle = document.getElementById('author--title');
const companyLogo = document.getElementById('company-logo--icon');
const fullImage = document.getElementById('company_full_image');
const figure = document.querySelector('#author--details');
const logoButtons = document.querySelectorAll('#logo-btn-container li');
console.log(logoButtons);

let currentIndex = 0;

function updateUI(index) {
  // Update quote and author details
  const currentData = quoteData[index];
  quoteText.textContent = currentData.quote;
  authorImage.src = `./public/${currentData.authorImage}`;
  companyLogo.src = `public/${currentData.companyLogoPath}`;
  console.log(companyLogo);
  fullImage.src = `./public/${currentData.fullImagePath}`;

  // hide author div when the data is not available
  if (!currentData.authorName && !currentData.authorTitle) {
    figure.style.display = 'none';
  } else {
    figure.style.display = 'flex';
    authorName.textContent = currentData.authorName;
    authorTitle.textContent = currentData.authorTitle;
  }

  // Toggle 'selected' class for logo buttons
  logoButtons.forEach((btn, btnIndex) => {
    btn.classList.toggle('selected', btnIndex === index);
  });

  // Update navigation dots
  navDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === index);
  });

  // Enable/disable buttons
  prevButton.disabled = index === 0;
  nextButton.disabled = index === quoteData.length - 1;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < quoteData.length - 1) {
    currentIndex++;
    updateUI(currentIndex);
  }
});

navDots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    if (currentIndex === dotIndex) return;
    currentIndex = dotIndex;
    updateUI(currentIndex);
  });
});

logoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('clicked button');
    const index = parseInt(button.getAttribute('data-index'), 10);
    updateUI(index);
  });
});
