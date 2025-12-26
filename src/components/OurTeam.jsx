import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionHeading from "./reusable/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import amit from "../assets/images/amit.jpg";
import prashant from "../assets/images/prashant.png";
import yogesh from "../assets/images/yogesh.jpg";

AOS.init();

const teamMembers = [
  {
    name: "Amit Patel",
    role: "Managing Director & Developer",
    image: amit,
    bio: "Visionary leader driving innovation across all departments.",
    // linkedin: "https://linkedin.com/in/raviverma",
  },
  {
    name: "Prashant Patel",
    role: "Markeing Head & Digital Strategist",
    image: prashant,
    bio: "Leads our growth strategy through digital marketing and SEO.",
    // linkedin: "https://linkedin.com/in/anjalisharma",
  },
  {
    name: "Ishika Patel",
    role: "Content Creator & SEO Specialist",
    image: "/images/team3.jpg",
    bio: "Leads our growth strategy through digital marketing and SEO.",
  },
  {
    name: "Mukesh Tak",
    role: "Full Stack Developer",
    image: "/images/team4.jpg",
    bio: "Develops efficient, scalable applications",
    // github: "https://github.com/priyanair",
  },
  {
    name: "Yogesh Jat",
    role: "Full Stack Developer & Tech Lead",
    image: yogesh,
    bio: "Expert in building scalable web applications and leading technical teams.",
    // linkedin: "https://linkedin.com/in/yogeshjat",
    // github: "https://github.com/YogeshJat8965",
  },
];

const OurTeam = () => {
  return (
    <Box sx={{ px: 4, py: 10, backgroundColor: "background.paper" }} id="team">
      <SectionHeading data-aos="fade-up">Meet Our Team</SectionHeading>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          textAlign: "center", 
          color: "text.secondary", 
          maxWidth: 700, 
          mx: "auto", 
          mb: 6 
        }}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Talented professionals dedicated to your success
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={4}
        maxWidth={1400}
        mx="auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {teamMembers.map((member, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              minWidth: 260,
              p: 4,
              textAlign: "center",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0px 16px 40px rgba(30, 64, 175, 0.15)",
                borderColor: "primary.light",
                background: "linear-gradient(135deg, #ffffff 0%, #EFF6FF 100%)",
              },
            }}
          >
            <Stack alignItems="center" spacing={2}>
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ 
                  width: 100, 
                  height: 100,
                  border: "4px solid",
                  borderColor: "primary.main",
                  boxShadow: "0px 4px 16px rgba(30, 64, 175, 0.2)"
                }}
              />
              <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                {member.name}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                {member.role}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {member.bio}
              </Typography>
              <Stack direction="row" spacing={1} mt={1}>
                {member.linkedin && (
                  <IconButton
                    href={member.linkedin}
                    target="_blank"
                    sx={{ color: "secondary.main" }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                )}
                {member.github && (
                  <IconButton
                    href={member.github}
                    target="_blank"
                    sx={{ color: "secondary.main" }}
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default OurTeam;
