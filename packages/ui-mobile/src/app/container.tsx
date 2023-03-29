import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Container } from "../components";
import { Screen } from "../helper";

const ButtonPage = () => {
  return (
    <SafeAreaView>
      <Screen title="Container" />

      <ScrollView>
        <Container>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
            culpa quas libero voluptas. Temporibus voluptatem aperiam veritatis
            reiciendis dolorum iusto necessitatibus labore, quasi eaque tempora
            sequi dolorem quibusdam totam fugiat natus aut ipsum. Quisquam culpa
            eius consequatur iusto autem aspernatur repudiandae tenetur sapiente
            harum amet explicabo debitis sunt, dolorum magni voluptatum
            distinctio doloremque alias dignissimos, quas deleniti minus! Qui
            veritatis provident quod odio molestiae quo voluptas similique animi
            iste nostrum, reprehenderit optio, aspernatur accusamus dolores
            dolore obcaecati tenetur cum dolorum molestias omnis fugiat
            laboriosam porro voluptatem? Recusandae laboriosam harum, non
            dignissimos ea, deserunt voluptate nobis ad, magnam autem officia.
          </Text>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonPage;
