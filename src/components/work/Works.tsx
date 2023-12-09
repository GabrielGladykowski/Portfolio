import React from 'react';
import {
  WorkBorder,
  WorkDescription,
  WorkImage,
  WorkInProgress,
  WorkLink,
  WorkLinkDescription,
  WorkStyled,
  WorkSubtitle,
  WorkTextWrapper,
  WorkTitle,
  WorkTitleWrapper,
  WorkWrapper,
} from './Work.styled';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

type NodeResult = {
  node: {
    title: string;
    subtitle: string;
    description: string;
    imageDescription: string;
    href: string;
    inProgress: boolean;
    inProgressText: string;
    image: {
      childImageSharp: {
        fluid: {
          base64: string;
          aspectRatio: number;
          src: string;
          srcSet: string;
          sizes: string;
        };
      };
    };
  };
};

type GraphQLResult = {
  allWorkJson: {
    edges: NodeResult[];
  };
};

export const Works: React.FC = () => {
  const GET_WORKS: GraphQLResult = useStaticQuery(graphql`
    query WorksQuery {
      allWorkJson {
        edges {
          node {
            title
            subtitle
            description
            imageDescription
            href
            inProgress
            inProgressText
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <WorkStyled id="work">
      {GET_WORKS.allWorkJson.edges.map((element) => {
        const getParagraphFromString = (word: string): React.ReactNode => {
          const arrayWithWordParts = word.split('|');

          return arrayWithWordParts[1] ? (
            <>
              {arrayWithWordParts[0]}
              <WorkLinkDescription
                inProgress={element?.node.inProgress}
                target="_blank"
                rel="noopener"
                href={arrayWithWordParts[1]}
              >
                {arrayWithWordParts[2]}
              </WorkLinkDescription>
            </>
          ) : (
            <>{arrayWithWordParts[0]}</>
          );
        };

        return (
          <WorkBorder key={element?.node.title} inProgress={element?.node.inProgress}>
            <WorkWrapper>
              <WorkInProgress inProgress={element?.node.inProgress}>
                {element?.node.inProgressText}
              </WorkInProgress>
              <WorkTextWrapper inProgress={element?.node.inProgress}>
                <WorkTitleWrapper>
                  <WorkTitle>{element?.node.title}</WorkTitle>
                  <WorkSubtitle>{element?.node.subtitle}</WorkSubtitle>
                </WorkTitleWrapper>
                <WorkDescription>
                  {getParagraphFromString(element?.node.description)}
                </WorkDescription>
              </WorkTextWrapper>
              <WorkImage inProgress={element?.node.inProgress}>
                <Img
                  style={{ width: '100%' }}
                  fluid={element?.node.image.childImageSharp.fluid}
                  alt={element?.node.imageDescription}
                />
              </WorkImage>
              <WorkLink
                inProgress={element?.node.inProgress}
                href={element?.node.href}
                target="_blank"
                rel="noopener"
              >
                View Project
              </WorkLink>
            </WorkWrapper>
          </WorkBorder>
        );
      })}
    </WorkStyled>
  );
};
