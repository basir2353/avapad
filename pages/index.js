import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "../styles/HomePage.module.css";
import Card from "../components/Card.js";
import { obj1, obj2 } from "../components/objdata.js";
import { theme } from "../components/MUIthemeforHomePage.js";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
export default function Index() {
  const [data, setdata] = useState(obj1);
  const [b1active, setb1active] = useState("true");
  const [b2active, setb2active] = useState("false");

  function tooglebutton(e) {
    if (e === "b1") {
      setdata(obj1);
      setb1active("true");
      setb2active("false");
    }
    if (e === "b2") {
      setdata(obj2);
      setb2active("true");
      setb1active("false");
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container className={styles.Container}>
          <Grid item md={12} xs={12}>
            <Typography variant="h1" className={styles.h1}>
              THE FIRST DUAL TOKEN MECHANISM LAUNCHPAD ON CRYPTO-UNIVERSE
            </Typography>
          </Grid>

          <Grid item md={12} xs={12} sx={{ margin: "10px auto" }}>
            <Typography
              variant="h2"
              className={styles.H2}
              sx={{ width: { md: "72%", xs: "100%" } }}
            >
              AVAPAD is a community-driven launchpad built to provide equal
              opportunities for all investors.
            </Typography>
          </Grid>

          <Grid item md={12} xs={12} sx={{ margin: "25px auto" }}>
            <Button
              variant="outlined"
              color="primary"
              className={styles.button1}
            >
              Apply For IDO
            </Button>
          </Grid>

          <Grid item md={12} xs={12}>
            <Button
              className={styles.button2}
              color="secondry"
              variant="outlined"
            >
              View all projects
            </Button>
          </Grid>

          <Grid item md={12} xs={12} sx={{ margin: "20px auto" }}>
            <Button
              className={styles.button1}
              variant="outlined"
              color="primary"
            >
              apply to distrube/airdrop your token
            </Button>
          </Grid>

          <Grid item md={12} xs={12}>
            <Typography
              variant="h1"
              className={styles.h1}
              sx={{ marginTop: "13%" }}
            >
              The worlds fastest growing network combined with a new generation
              launchpad in a dual token structure.
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h1" className={styles.aboutus}>
              ABOUT US
            </Typography>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            className={styles.aboutusParagraph}
            sx={{ paddingTop: "5%", textAlign: "left" }}
          >
            <Typography variant="h3" sx={{ margin: "10px 0px" }}>
              WhAT IS AVAPAD ?
            </Typography>
            <Typography
              variant="p"
              sx={{ textAlign: "left", margin: "5px 0px" }}
            >
              Avapad is a community oriented decentralized launchpad that
              empower high potential projects running on Avalanche Network.
            </Typography>
            <Typography variant="h3" sx={{ margin: "10px 0px" }}>
              WHY CHOOSE US ?
            </Typography>
            <Typography variant="p" sx={{ textAlign: "left" }}>
              Avapad is built up for need of community trust and togetherness.
              Wide range tier system and two token mechanism have been
              established to cover all investors and community members. Avapad
              provides a fair and decentralized IDO participation process, and
              while ensuring this, it aims to achieve a balance of gains for
              both the investor and the entrepreneur. When choosing projects, it
              pays attention to the following criteria:
            </Typography>
            <Box
              className={styles.aboutusParagraphList}
              sx={{ padding: "10px 0px", textAlign: "left" }}
            >
              <Typography>
                - Project owners resumes and qualifications
              </Typography>

              <Typography>
                - Project stakeholders and investors references
              </Typography>
              <Typography>- Roadmap of the project</Typography>
              <Typography>- Project documents and outputs</Typography>
              <Typography>- Tokenomics</Typography>
              <Typography>
                - Activity of social media pages and website quality
              </Typography>
              <Typography>
                - Adequacy to provide the required liquidity
              </Typography>
              <Typography variant="p" sx={{ margin: "10px 0px" }}>
                Avapad will only support projects that meet these criteria
                throughout their roadmaps. At the same time, Avapad charges low
                fees on all transactions through the Avalanche Network. In this
                way, it provides convenience to investors in terms of
                transaction mobility.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} xs={12} className={styles.RotateContainer}>
            <div className={styles.rotate}>
              <div className={styles.innerRotate}></div>
            </div>
            <div className={styles.aboutimg}>
              <Image src="/beers.png" alt="no" height={200} width={200} />
            </div>
          </Grid>

          <Grid item md={12} xs={12}>
            <Typography variant="h1" className={styles.tieredsystem}>
              THE AVAPAD TIERED SYSTEM
            </Typography>
            <Typography variant="h2" className={styles.tieredsystemP}>
              Avapad offers a public white list lottery tier, weighted lottery
              tiers and guaranteed allocation tiers.
            </Typography>
            <Grid item sx={{ margin: "20px auto" }}>
              <Image src="/tiered.png" alt="sA" height={356} width={356} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h2" className={styles.Tiers}>
              GUARANTEED ALLOCATION TIERS
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{
              justifyContent: "center",
              display: "flex",
              borderBottom: "1px solid rgba(250,250,250,0.1)",
              marginBottom: "25px",
            }}
          >
            <Button
              sx={{ color: "white", opacity: "0.8" }}
              className={b1active === "true" ? styles.active : null}
              onClick={() => {
                tooglebutton("b1");
              }}
            >
              AKITAX Tier
            </Button>
            <Button
              sx={{ color: "white", opacity: "0.8" }}
              className={b2active === "true" ? styles.active : null}
              onClick={() => {
                tooglebutton("b2");
              }}
            >
              XAKITA Tier
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {data.map((m, i) => {
              return <Card data={m} key={i} />;
            })}
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h2"
              sx={{ margin: "12% auto", fontSize: "180%" }}
            >
              ROUND-2 FCFS ROUND
            </Typography>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Image src="/fcfs.png" alt="io" width={450} height={450} />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <Typography variant="p">
                  In round 2, the unsold tokens from the first round are made
                  available on a FCFS basis, to every one. The tier members will
                  get an additional amount. This round will be opened few hours
                  before the sale endtime.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h1" className={styles.token}>
              About Distrube/Airdrop Your Token
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#1f1f21", padding: "30px" }}
            >
              <Grid item xs={12} md={12}>
                <Image src="/token.png" alt="io" width={130} height={235} />
              </Grid>
              <Grid item xs={12} md={12} sx={{ margin: "10px auto" }}>
                <Typography variant="p">
                  You can distribute or airdrop your token in the AVAX network
                  with the specified vesting dates. After clicking the button
                  above and making your application, we will have a detailed
                  interview with you
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h1"
              sx={{ marginTop: "10%", fontSize: "250%" }}
              className={styles.partner}
            >
              INCUBATOR AND INVESTMENT PARTNER
            </Typography>
            <Grid item sx={{ backgroundColor: "#1f1f21", padding: "20px" }}>
              <Grid item xs={12} md={12}>
                <Image src="/1fa.png" alt="ki" width={256} height={256} />
              </Grid>
              <Grid item xs={12} md={12} sx={{ margin: "20px auto" }}>
                <Typography variant="p">
                  We specialize in taking your innovative and new idea from
                  concept to completion through our market leading advisory,
                  investment, development, influencer marketing and legal
                  support services.
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="p">
                  We help by not only bringing capital and partners, but every
                  aspect of your project from tokenomics to post launch marking.
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} sx={{ margin: "20px auto" }}>
                <Button color="secondry" variant="outlined">
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h1" className={styles.contact}>
              Contact
            </Typography>
            <Grid
              container
              sx={{ width: { md: "50%", xs: "100%" }, margin: "10px auto" }}
            >
              <Grid item md={12} xs={12} className={styles.RotateContainer}>
                <div className={styles.rotate1}>
                  <div
                    className={styles.innerRotate1}
                    sx={{ margin: "50px" }}
                  ></div>
                </div>
                <div className={styles.aboutimg}>
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Box>
                        <TwitterIcon />
                      </Box>
                      <Box sx={{ padding: "0px 10px" }}>Follow Our Twitter</Box>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Box>
                        <LanguageIcon />
                      </Box>
                      <Box sx={{ padding: "0px 10px" }}>WWW.AVAPAD.XYZ</Box>
                    </Box>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
