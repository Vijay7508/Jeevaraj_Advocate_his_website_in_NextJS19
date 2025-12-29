"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArticleIcon from "@mui/icons-material/Article";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DescriptionIcon from "@mui/icons-material/Description";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ClientResources() {
  return (
    <>
      {/* HERO */}
     <motion.div
  initial="hidden"
  animate="show"
  variants={fadeUp}
  transition={{ duration: 0.7 }}
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
      url('/Client.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    padding: "120px 0",
    textAlign: "center",
  }}
>
  <Container>
    <Typography variant="h3" fontWeight="bold" gutterBottom>
      Client Resources
    </Typography>
    <Typography
      variant="h6"
      sx={{ color: "#ddd", maxWidth: 700, mx: "auto" }}
    >
      Helpful legal information, updates, and ready-to-use formats for our clients.
    </Typography>
  </Container>
</motion.div>


      {/* CONTENT */}
      <Container sx={{ py: 10 }}>

        {/* FAQ CARD (CENTERED) */}
        <Box display="flex" justifyContent="center" mb={8}>
  <motion.div whileHover={{ y: -6 }} style={{ width: "100%" }}>
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 }, // side padding (mobile + desktop)
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          backgroundColor: "#fff",
          textAlign: "center",
          py: 4,
        }}
      >
        <CardContent>
          <HelpOutlineIcon fontSize="large" />

          <Typography variant="h5" fontWeight="bold" mt={2}>
            FAQs
          </Typography>

          <Typography color="text.secondary" mt={1} mb={3}>
            Common legal questions answered to help you understand procedures and rights.
          </Typography>

          <Accordion sx={{ textAlign: "left" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do I book a consultation?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                You can book a consultation via our contact page or by calling our office.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ textAlign: "left" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Do you provide online consultation?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Yes, online consultations are available on prior appointment.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ textAlign: "left" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Is client data confidential?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Absolutely. All client information is kept strictly confidential.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Box>
    </Container>
  </motion.div>
</Box>


        {/* BLOGS & FORMATS (CENTERED GRID) */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {/* BLOGS */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ y: -8 }}>
              <Card
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  height: "100%",
                  boxShadow: 4,
                }}
              >
                <CardContent>
                  <ArticleIcon fontSize="large" />
                  <Typography variant="h5" fontWeight="bold" mt={2}>
                    Legal Updates & Articles
                  </Typography>
                  <Typography color="text.secondary" mt={1}>
                    Latest judgments, legal insights, and important updates.
                  </Typography>

                  <Button variant="outlined" sx={{ mt: 3 }}>
                    View Articles
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* FORMATS */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ y: -8 }}>
              <Card
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  height: "100%",
                  boxShadow: 4,
                }}
              >
                <CardContent>
                  <DescriptionIcon fontSize="large" />
                  <Typography variant="h5" fontWeight="bold" mt={2}>
                    Legal Formats
                  </Typography>
                  <Typography color="text.secondary" mt={1}>
                    Download ready-to-use notices, applications & affidavits.
                  </Typography>

                  <Button variant="contained" sx={{ mt: 3 }}>
                    Download Formats
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
