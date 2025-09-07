import { useAuth } from "@/providers/AuthProvider";
import ChatProvider from "@/providers/ChatProvider";
import { Redirect } from "expo-router";
import { Stack } from "expo-router";

export default function HomeLayout() {

    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }
    return (

        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ChatProvider>



    )
}