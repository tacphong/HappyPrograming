import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import Box from "@mui/material/Box";
import {alpha} from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      component={MotionViewport}
    >
      <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h5">Empower Your Programming Journey</Typography>
          <Typography sx={{ color: 'text.disabled' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Typography>
        </m.div>
      </Stack>

      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
        <Grid xs={12} md={6}>
          <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
          >
            <m.div variants={varFade().inDown}>
              <Typography
                  variant="h5"
                  sx={{
                    mt:7,
                    ml: 15,
                    mb: 3,
                  }}
              >
                Personalized Mentor Matching
              </Typography>
            </m.div>

              <Typography sx={{ color: 'text.disabled' }}>
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Typography>
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inUp}>
            <Image sx={{left:170}} disabledEffect alt="rocket" src="/assets/images/home/happy4.png" />
          </m.div>
        </Grid>
      </Grid>

      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }} sx={{mt:10}}>
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inUp}>
            <Image sx={{left:150}} disabledEffect alt="rocket" src="/assets/images/home/happy1.png" />
          </m.div>
        </Grid>
        <Grid xs={12} md={6}>
          <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                  mt:5,
                },
              }}
          >
            <m.div variants={varFade().inDown}>
              <Typography
                  variant="h5"
                  sx={{

                    ml: 15,
                    mb: 3,
                  }}
              >
                Personalized Mentor Matching
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.disabled' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Typography>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }} sx={{mt:10}}>
        <Grid xs={12} md={6}>
          <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
          >
            <m.div variants={varFade().inDown}>
              <Typography
                  variant="h5"
                  sx={{
                    mt:7,
                    ml: 15,
                    mb: 3,
                  }}
              >
                Personalized Mentor Matching
              </Typography>
            </m.div>

            <Typography sx={{ color: 'text.disabled' }}>
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inUp}>
            <Image sx={{left:170}} disabledEffect alt="rocket" src="/assets/images/home/happy2.png" />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
