import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai, hoc sinh FPT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai, hoc sinh FPT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai, hoc sinh FPT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai, hoc sinh FPT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai, hoc sinh FPT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai, hoc sinh FPT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Not yet convinced? <br /> Dont just take our work for it
          </Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card>
              <CardMedia
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{ mx: 'auto', width: 24, height: 24, marginTop: 10 }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ marginTop: 3 }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </Box>
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mt: 5,
        }}
      >
        <m.div variants={varFade().inUp}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            target="_blank"
            rel="noopener"
          >
            Find my mentor
          </Button>
        </m.div>
      </Stack>
    </Container>
  );
}
