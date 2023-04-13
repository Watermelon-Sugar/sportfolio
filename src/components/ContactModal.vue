<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" tile color="f8f8f8" dark class="mt-16"> Contact </v-btn>
      </template>
      <v-card>
        <form  action="https://formsubmit.co/jesuisseyitan@gmail.com" method="POST" >
          <v-card-title>
            <v-icon style="float: right" @click="dialog = false">mdi-window-close</v-icon>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label=" Name"
                    name="name"
                    v-model="name.value.value"
                    :error-messages="name.value.errors"
                    placeholder="Name"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                  name="email"
                    label="Email"
                    type="email"
                    v-model="email.value.value"
                    :error-messages="email.value.errors"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    name="message"
                    label="Message"
                    v-model="message.value.value"
                    :error-messages="message.value.errors"
                    auto-grow
                    variant="outlined"
                    rows="4"
                    required
                    row-height="40"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mx-auto mb-4"
              color="7f7f7f"
              variant="tonal"
              @click="submit"
            >
              Send <v-icon class="ml-2">mdi-send</v-icon>
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {useField, useForm} from "vee-validate";
// import emailjs from "emailjs-com";
export default {
    setup() {
        const { handleSubmit, isSubmitting } = useForm({
            validationSchema: {
                name(value) {
                    if (!value) {
                        return "Name is required";
                    }
                },
                email(value) {
                    if (!value) {
                        return "Email is required";
                    }
                },
                message(value) {
                    if (!value) {
                        return "Message is required";
                    }

                }
            }


        })

        const name = useField("name");
        const email = useField("email");
        const message = useField("message");

        const submit = handleSubmit((values) => {
            console.log(values);
            alert("Message sent, I'll get back to you soon");
        });

        return {
            name,
            email,
            message,
            submit,
            isSubmitting}
        
        },
  data() {
    return {
      valid: false,
      dialog: false,
    };
  },
//   methods: {
//     sendEmail() {
//       const contactFormTemplate = {
//         name: this.name,
//         email: this.email,
//         message: this.message,
//       };
//       console.log(contactFormTemplate);
//       emailjs.sendForm("service_s2onnjb", "template_08eacd8", contactFormTemplate).then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert(
//             "Message sent, I'll get back to you soon",
//             response.status,
//             response.text
//           );
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           alert("An error occurred, Please try again", error);
//         }
//       );
//     },
//   },
};
</script>
