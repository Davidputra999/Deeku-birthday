const birthdayDate = new Date(2026, 11, 29, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const difference = birthdayDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";

    const status = document.getElementById("countdown-status");
    if (status) {
      status.textContent = "It's finally here! 🎂✨ Happy Birthday! 🤍";
    }

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Gift button
function openGift() {
  const gift = document.querySelector(".gift-button");

  if (gift) {
    gift.style.display = "none";
  }

  const proposal = document.getElementById("proposal");

  if (proposal) {
    proposal.classList.add("show");
  }

  burst();
}


// Heart / sparkle burst animation
function burst() {
  for (let i = 0; i < 24; i++) {
    const h = document.createElement("span");

    h.textContent = ["💗", "♡", "✨", "🌸"][
      Math.floor(Math.random() * 4)
    ];

    h.style.position = "fixed";
    h.style.left = "50%";
    h.style.top = "55%";
    h.style.fontSize =
      (14 + Math.random() * 24) + "px";
    h.style.zIndex = "10";
    h.style.pointerEvents = "none";

    document.body.appendChild(h);

    const x =
      (Math.random() - 0.5) *
      window.innerWidth;

    const y =
      (Math.random() - 0.7) *
      window.innerHeight;

    h.animate(
      [
        {
          transform: "translate(-50%,-50%)",
          opacity: 1
        },
        {
          transform:
            `translate(${x}px,${y}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0
        }
      ],
      {
        duration: 1200 + Math.random() * 900,
        easing: "ease-out"
      }
    );

    setTimeout(() => h.remove(), 2200);
  }
    }
