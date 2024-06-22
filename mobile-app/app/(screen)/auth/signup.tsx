import { Text } from "@/components/Text";
import Toast from "@/components/Toast";
import { View } from "@/components/View";
import CustomButton from "@/components/forms/CustomButton";
import CustomInput from "@/components/forms/CustomInput";
import { api } from "@/utils/fetch";
// import { useToastController } from "@tamagui/toast";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Signup() {
  const [data, setData] = React.useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");



  const onRegister = async () => {
    if (!data.fullName || !data.phoneNumber || !data.email || !data.password) {
      setMessage("Please fill all fields");
      setVisible(true);
      return;
    }
    setLoading(true);

    await api
      .post("/users/createAccount", data)
      .then(({ data }) => {
        setMessage(data.message);
        setVisible(true);
        setError("");
        setLoading(false);
        router.push("/login");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setVisible(true);
        setLoading(false);
      });
  };

  return (
    <View className="w-full h-full bg-[#F7951C]">
      <View className="w-full h-[92%] mt-[20%] rounded-3xl items-center">
        <View className="rounded-3xl flex flex-row items-center mt-4">
          <Text className="text-4xl font-extrabold ">Supa</Text>
          <Text className="text-4xl font-extrabold text-[#F7951C]">Menu</Text>
        </View>
        <View>
          <Text className="text-sm font-bold text-[#bcc1cf] mt-4 text-center ">
            Welcome on Board!
          </Text>
          {error ? (
            <Text className="text-red-500 text-sm text-center">{error}</Text>
          ) : null}
        </View>

        <View className="w-[90%] mt-4">
          <View className="py-4">
            <CustomInput
              left={<TextInput.Icon icon="mail" />}
              onChangeText={(text: any) => setData({ ...data, fullName: text })}
              label="Full Name"
            />
            <CustomInput
              onChangeText={(text: any) =>
                setData({ ...data, phoneNumber: text })
              }
              left={<TextInput.Icon icon="phone" />}
              label="Phone Number"
            />
            <CustomInput
              left={<TextInput.Icon icon="mail" />}
              label="Email"
              onChangeText={(text: any) => setData({ ...data, email: text })}
            />
            <CustomInput
              onChangeText={(text: any) => setData({ ...data, password: text })}
              left={<TextInput.Icon icon="lock" />}
              label="password"
            />
          </View>
          <View />
        </View>
        <View className="py-3 w-[90%]">
          <CustomButton
            onPress={onRegister}
            // href="(tabs)"
            buttonText={loading ? "Registering.." : "Register"}
            className="text-white"
          />
        </View>
        <View className="w-[90%] flex flex-row items-center gap-x-2 my-2">
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
          <Text className="text-[#9098b1] font-bold">OR</Text>
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
        </View>
        <View className="w-[90%]">
          <View className="w-full flex items-center mt-2 ">
            <View className="flex flex-row gap-x-2 mt-4">
              <Text className="text-[#bcc1cf] inline">
                Already have an account?
              </Text>
              <Pressable onPress={() => router.push("/(screen)/auth/login")}>
                <Text className="text-[#fec57f] font-bold inline">Sign In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Toast visible={visible} message={message} setVisible={setVisible} />
    </View>
  );
}
