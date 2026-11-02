import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Create Account' }}
      />
      <Stack.Screen
        name="review"
        options={{ title: 'Review Details' }}
      />
      <Stack.Screen
        name="success"
        options={{ title: 'Success' }}
      />
    </Stack>
  );
}