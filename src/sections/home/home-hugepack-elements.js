import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useForm, Controller } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
import { _socials } from 'src/_mock';
import Rating from '@mui/material/Rating';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ListItemText from '@mui/material/ListItemText';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// _mock

// assets
import { AvatarShape } from 'src/assets/illustrations';
// components
import Image from 'src/components/image';

// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    title: 'Nguyen Trong Tai',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Nguyen Trong Tai',
  },
  {
    title: 'Nguyen Trong Tai',
  },
];

// ----------------------------------------------------------------------

export default function HomePopular() {
  const theme = useTheme();

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
          <Typography variant="h2">Popular mentor</Typography>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Do you want to move on next step? Choose our most popular mentors, who will
            <br />
            help you to achieve your professional goals
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
            <Card sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <AvatarShape
                  sx={{
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    mx: 'auto',
                    bottom: -26,
                    position: 'absolute',
                  }}
                />

                <Avatar
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg"
                  sx={{
                    width: 64,
                    height: 64,
                    zIndex: 11,
                    left: 0,
                    right: 0,
                    bottom: -32,
                    mx: 'auto',
                    position: 'absolute',
                  }}
                />

                <Image
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_2.jpg"
                  ratio="16/9"
                  overlay={alpha(theme.palette.grey[900], 0.48)}
                />
              </Box>

              <ListItemText
                sx={{ mt: 7, mb: 1 }}
                primaryTypographyProps={{ typography: 'subtitle1' }}
                secondaryTypographyProps={{ component: 'span', mt: 0.5 }}
              />

              <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mb: 2.5 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ marginTop: 3 }}>
                  {card.title}
                </Typography>
              </Stack>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Box
                sx={{ py: 3, typography: 'subtitle1', textAlign: 'center' }}
              >
                <div>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ mb: 0.5, color: 'text.secondary' }}
                  >
                    Skill
                  </Typography>
                  <Rating size="small" value={Number(5)} />
                </div>
              </Box>
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
