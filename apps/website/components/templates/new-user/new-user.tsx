import useTranslation from 'next-translate/useTranslation';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Box, Dialog, Stack, Typography } from '@mui/material';

import { AvatarUploadCard } from './avatar-upload-card';
import { Form } from './form';
import { schema, NewUserForm } from './schema';

export function NewUserTemplate() {
  const { t } = useTranslation('dashboard-new-user');
  const methods = useForm<NewUserForm>({
    resolver: yupResolver(schema),
  });
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={{ xs: 'flex-start', md: 'space-between' }}
      alignItems="stretch"
    >
      <Stack
        direction="column"
        gap={7.5}
        sx={{ maxWidth: { xs: '100%', md: '35%' } }}
      >
        <Typography component="h1" variant="h4">
          {t('title')}
        </Typography>
        <Stack direction="column" gap={1}>
          <Box>
            <Typography component="h2" variant="h5">
              {t('form.title')}
            </Typography>
            <Typography component="p" variant="caption">
              {t('form.caption')}
            </Typography>
          </Box>
          <FormProvider {...methods}>
            <Form />
          </FormProvider>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <FormProvider {...methods}>
          <AvatarUploadCard />
        </FormProvider>
      </Box>
    </Stack>
  );
}