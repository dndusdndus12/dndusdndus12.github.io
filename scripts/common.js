document.addEventListener("DOMContentLoaded", () => {
    // 스크롤 버튼
    document.getElementById("scrollTopBtn")?.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  
    document.getElementById("scrollBottomBtn")?.addEventListener("click", () =>
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    );
  
    // 이메일 복사
    const copyEmail = document.getElementById("copyEmail");
    const notice = document.getElementById("copyNotice");
  
    if (copyEmail && notice) {
      copyEmail.addEventListener("click", () => {
        navigator.clipboard.writeText("jow@vcu.edu").then(() => {
          notice.style.display = "block";
          notice.classList.remove("fade-out");
  
          setTimeout(() => {
            notice.classList.add("fade-out");
          }, 1000);
  
          setTimeout(() => {
            notice.style.display = "none";
            notice.classList.remove("fade-out");
          }, 2000);
        });
      });
    }
  });
  