import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { Button, Container } from "../components";
import { Column, Flex, Screen } from "../helper";

const ButtonPage = () => {
  return (
    <SafeAreaView>
      <Screen title="Button" />

      <ScrollView>
        <Container>
          <Flex title="Variant">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </Flex>

          <Column title="Full width">
            <Button fullWidth>Full Width</Button>
            <Button fullWidth variant="secondary">
              Full Width
            </Button>
            <Button fullWidth variant="danger">
              Full Width
            </Button>
          </Column>

          <Flex title="Size Variants">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </Flex>

          <Flex title="Disabled">
            <Button isDisabled size="sm">
              Small
            </Button>
            <Button variant="secondary" isDisabled size="md">
              Medium
            </Button>
            <Button variant="danger" isDisabled size="lg">
              Large
            </Button>
            <Button isDisabled size="xl">
              Extra large
            </Button>
          </Flex>

          <Flex title="Rounded">
            <Button isRounded size="sm">
              sm
            </Button>
            <Button isRounded size="md">
              md
            </Button>
            <Button isRounded size="lg">
              lg
            </Button>
            <Button isRounded size="xl">
              xl
            </Button>
          </Flex>

          <Flex title="Square Aspect Ratio">
            <Button isAspectSquare isRounded size="sm">
              sm
            </Button>
            <Button isAspectSquare isRounded size="md">
              md
            </Button>
            <Button isAspectSquare isRounded size="lg">
              lg
            </Button>
            <Button isAspectSquare isRounded size="xl">
              xl
            </Button>
          </Flex>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonPage;
