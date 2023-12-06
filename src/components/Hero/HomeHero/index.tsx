import * as React from "react"
import { useTranslation } from "next-i18next"
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"
import { CommonHeroProps } from "@/components/Hero/utils"
import { Image } from "@/components/Image"
import Morpher from "@/components/Morpher"
import Translation from "@/components/Translation"

export interface HomeHeroProps extends Pick<CommonHeroProps, "heroImgSrc"> {}

const HomeHero = ({ heroImgSrc }: HomeHeroProps) => {
  const { t } = useTranslation("page-index")
  return (
    <Box>
      <Box h={440}>
        <Image
          src={heroImgSrc}
          alt={t("page-index:page-index-hero-image-alt")}
          w="full"
          h="full"
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>
      <VStack>
        <Stack
          spacing={{ base: "4", lg: "7" }}
          textAlign="center"
          mx="4"
          py="8"
          maxW="2xl"
        >
          <Morpher />
          <VStack spacing="6">
            <Heading as="h1" size="2xl">
{t("page-index:page-index-title")}
            </Heading>
            <Text size="xl">
{t("page-index:page-index-description")}
            </Text>
            <ButtonLink to="/learn/">
{t("page-index:page-index-title-button")}
            </ButtonLink>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  )
}

export default HomeHero
