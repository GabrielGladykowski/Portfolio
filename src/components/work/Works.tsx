import React from 'react';
import {
  WorkBorder,
  WorkDescription,
  WorkImage,
  WorkLink,
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
      {GET_WORKS.allWorkJson.edges.map((element) => (
        <WorkBorder key={element?.node.title}>
          <WorkWrapper>
            <WorkTextWrapper>
              <WorkTitleWrapper>
                <WorkTitle>{element?.node.title}</WorkTitle>
                <WorkSubtitle>{element?.node.subtitle}</WorkSubtitle>
              </WorkTitleWrapper>
              <WorkDescription>{element?.node.description}</WorkDescription>
            </WorkTextWrapper>
            <WorkImage>
              <Img
                style={{ width: '100%' }}
                fluid={element?.node.image.childImageSharp.fluid}
                alt={element?.node.imageDescription}
              />
            </WorkImage>
            <WorkLink href={element?.node.href} target="_blank" rel="noopener">
              View Project
            </WorkLink>
          </WorkWrapper>
        </WorkBorder>
      ))}
    </WorkStyled>
  );
};
