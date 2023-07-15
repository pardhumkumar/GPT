import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import JavascriptIcon from '@mui/icons-material/Javascript';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box p={2}>
          <Typography fontSize={22} mb={2} fontWeight="bold">
            Summary Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "#60bf70",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 ,mb:2,color:"#60bf70"}}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold"  fontSize={18}>
                TEXT SUMMARY
              </Typography>
              <Typography fontSize={14}>
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography fontSize={22} mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "#60bf70",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 ,mb:2,color:"#60bf70"}}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" fontSize={18}>
                Paragraph
              </Typography>
              <Typography fontSize={14}>
                Generate Paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography fontSize={22} mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "#60bf70",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 ,mb:2,color:"#60bf70"}}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" fontSize={18}>
                Chatbot
              </Typography>
              <Typography fontSize={14}>Chat With AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography fontSize={22} mb={2} fontWeight="bold">
            JS Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "#60bf70",
                cursor: "pointer",
              },
            }}
          >
            <JavascriptIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 ,mb:2,color:"#60bf70"}}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" fontSize={18}>
                JS CONVERTER
              </Typography>
              <Typography fontSize={14}>
                Trasnlate english to javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography fontSize={22}  mb={2} fontWeight="bold">
            AI SCIFI Images
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "#60bf70",
                cursor: "pointer",
              },
            }}
          >
            < ImageSearchIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 ,mb:2,color:"#60bf70"}}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" fontSize={18}>
                Scifi Image
              </Typography>
              <Typography fontSize={14}>Generate Scifi images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;