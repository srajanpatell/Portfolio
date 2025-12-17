import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;

    /* 🔴 FIX: react-animate-on-scroll wrapper */
    > div {
      width: 100%;
      display: block;
    }

    .project {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;

      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      overflow: hidden;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap; /* ✅ mobile-safe */
        color: var(--blue);
        margin-bottom: 2.4rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 3.6rem; /* ✅ smaller for mobile */
        }
      }

      h3 {
        margin-bottom: 1.6rem;
      }

      p {
        letter-spacing: 0.08rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        word-break: break-word;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap; /* ✅ prevents overflow */
          gap: 1.2rem;
          font-size: 1.4rem;
          opacity: 0.7;
        }
      }
    }
  }

  /* ===== TABLET ===== */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ===== MOBILE ===== */
  @media (max-width: 740px) {
    margin-top: 10rem;

    h2 {
      font-size: 3rem;
    }

    .projects {
      grid-template-columns: 1fr;
      padding: 0 1.2rem;
    }
  }
`;
