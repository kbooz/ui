import type { PartialDeep } from 'type-fest';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Gates } from '../../services/graphql/types.generated';
/* TODO: Arias and Labels */

export function GatesCard({
  gate_name,
  badge,
  description,
  categories,
  dao,
}: PartialDeep<Gates>) {
  return (
    <MUICard>
      <CardMedia
        component="img"
        src={badge?.ipfsURL && `https://ipfs.infura.io/ipfs/${badge.ipfsURL}`}
        alt={badge?.name}
        sx={{ aspectRatio: '1/1' }}
      />
      <CardHeader
        sx={{ pt: 2, pb: 1, '.MuiCardHeader-action': { alignSelf: 'unset' } }}
        avatar={
          <Avatar
            src={dao.logo_url}
            sx={{ width: 32, height: 32 }}
            aria-label="recipe"
          >
            {dao.name?.[0]}
          </Avatar>
        }
        action={
          <IconButton color="secondary" aria-label="settings">
            <BookmarkBorderIcon />
          </IconButton>
        }
        title={dao.name}
      />
      <CardContent sx={{ py: 1 }}>
        <Typography gutterBottom variant="h5">
          {gate_name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            /* TODO: make line-clamp reusable */
            display: '-webkit-box',
            WebkitLineClamp: 2,
            webkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={1} px={2} pt={1} pb={2}>
        {categories.map((category) => (
          <Chip key={category} label={category} size="small" />
        ))}
      </Stack>
    </MUICard>
  );
}
