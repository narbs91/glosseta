import { HStack, Link, Image } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import styles from "../../../../styles/Home.module.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className={styles.footer}>
        <HStack>
          <Link
            padding={2}
            href={"https://twitter.com/Glossetadotcom"}
            isExternal
          >
            <FaTwitter />
            <span className={styles.visuallyhidden}>
              Opens the Glosseta Twitter page in a new window
            </span>
            <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            padding={2}
            href={"https://github.com/narbs91/glosseta"}
            isExternal
          >
            <FaGithub />
            <span className={styles.visuallyhidden}>
              Opens the GitHub project repo in a new window
            </span>
            <ExternalLinkIcon mx="2px" />
          </Link>
          <Link padding={2} href={"https://www.arweave.org/"} isExternal>
            <Image
              borderRadius="full"
              boxSize="18px"
              src="./arweave_logo.png"
            />
            <span className={styles.visuallyhidden}>
              Opens Arweave.org in a new window
            </span>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
      </footer>
    </>
  );
};

export default Footer;