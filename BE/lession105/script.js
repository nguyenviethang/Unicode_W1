const username = document.querySelector(".username");
const checkUsername = async (body) => {
  const res = await fetch("./check_username.php", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body).toString(),
  });
  const data = await res.json();

  const error = document.querySelector(".error");
  if (data.status == "error") {
    error.innerText = "Username khong hop le";
    error.classList.add("warning");
  } else {
    error.innerText = "username hop le";
    error.classList.add("success");
  }
};
username.addEventListener("change", (e) => {
  checkUsername({
    user: e.target.value,
  });
});
