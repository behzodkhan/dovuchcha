import { Avatar, Text, Button, Paper } from '@mantine/core';
import classes from './UserCardImage.module.css'

export function UserInfoAction({name, username, img, title}) {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" className={classes.card} >
      <Avatar 
        src={img}
        size={120}
        radius={120}
        mx="auto"
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="md" className={classes.text}>
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {title} 
      </Text>
      <form action={username} target='_blank' >
          <Button type='submit' variant="default" fullWidth mt="md" >
            Xabar yuborish
          </Button>
      </form>
    </Paper>
    
  );
  
}