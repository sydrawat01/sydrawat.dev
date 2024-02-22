import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import apple from '../../content/thumbnails/apple.svg';
import vscode from '../../content/thumbnails/vscode.svg';
import mx2x from '../../content/thumbnails/mouse.svg';
import screen from '../../content/thumbnails/screen.svg';
import keyboard from '../../content/thumbnails/keyboard.svg';

export default class Me extends Component {
  static contextType = ThemeContext; //eslint-disable-line

  render() {
    return (
      <Layout>
        <Helmet title={`About Me | ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div>
            <div>
              <h2>whoami</h2>
              <p>Hey, I&apos;m Sid! </p>{' '}
              <p>
                <span aria-label="grad-hat" role="img">
                  🎓
                </span>{' '}
                I&apos;m a Graduate student pursuing my Masters in Information Systems at the
                College of Engineering in{' '}
                <a href="https://northeastern.edu">Northeastern University, Boston.</a>
              </p>
              <p>
                <span aria-label="curious" role="img">
                  🧐
                </span>{' '}
                I am interested in Site Reliability Engineering, DevOps and Fullstack Engineering! I
                just finished my Spring &apos;23 Co-op as a Software Engineer at{' '}
                <a href="https://github.com/Boehringer-Ingelheim">@Boehringer-Ingelheim USA</a>,
                developing GPT powered chatbots for medical websites using Azure OpenAI & Power
                Virtual Agents, using Kubernetes and Helm Charts to deploy a highly available
                cluster for the chatbots. As an open-source enthusiast, I believe in the power of
                collaboration and constantly seek ways to improve my skills by contributing to the
                community.
              </p>
              <h3>Getting to know me</h3>
              <p>
                <span aria-label="building" role="img">
                  🏢
                </span>{' '}
                Prior to my Master&apos;s degree at{' '}
                <a href="https://wwww.northeastern.edu/">Northeastern</a>, I graduated with a
                Bachelor&apos;s degree in Computer Science from
                <a href="https://www.manipal.edu"> Manipal University, India </a>, and worked as a
                Senior Software Engineer in the PaaS team for Ericsson, Hungary at{' '}
                <a href="https://www.wipro.com/en-IN/"> Wipro Technologies.</a>
              </p>
              <p>
                <span aria-label="student" role="img">
                  🧑‍💻
                </span>{' '}
                Currently, I am working on a project where I work with a Highly Available{' '}
                <a href="https://kubernetes.io/"> Kubernetes</a> cluster which hosts a Dockerized
                REST API and other microservices that are deployed on a regional, multi-nodal
                private <a href="https://cloud.google.com/kubernetes-engine?hl=en">GKE cluster</a>{' '}
                using <a href="https://helm.sh/">Helm Charts.</a> I&apos;m using{' '}
                <a href="https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md">
                  Prometheus and Grafana
                </a>{' '}
                for logging and monitoring of metrics on the cluster. A custom health check on this
                REST API is done by a Highly Available <a href="https://kafka.apache.org/">Kafka</a>{' '}
                cluster (deployed using the{' '}
                <a href="https://bitnami.com/stack/kafka/helm">Bitnami Kafka Helm Chart</a> as a
                dependency) on the same{' '}
                <a href="https://cloud.google.com/kubernetes-engine?hl=en">GKE cluster</a> using the
                traditional producer-consumer model. The health check runs as a CronJob using a
                custom <a href="https://sdk.operatorframework.io/">Kubernetes operator</a> written
                in Go and built using{' '}
                <a href="https://book.kubebuilder.io/cronjob-tutorial/api-design">Kubebuilder.</a>
              </p>
              <h3>Tech Setup</h3>
              <div className="setup-container">
                <a
                  href="https://support.apple.com/kb/SP754?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={apple} alt="Apple" />
                </a>
                <a
                  href="https://www.logitech.com/en-ph/product/mx-master-2s-flow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mx2x} alt="Logitech MX Master 2S" />
                </a>
                <a href="https://code.visualstudio.com">
                  <img src={vscode} alt="VSCode" />
                </a>
                <a
                  href="https://www.samsung.com/in/monitors/curved-cf390/LC27F390FHWXXL/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={screen} alt='Samsung 27" Curved Monitor' />
                </a>
                <a
                  href="https://www.lofree.co/products/dot-mechanical-keyboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={keyboard} alt="Lofree DOT" />
                </a>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 'lighter', fontSize: `${1.3}rem` }}>
                If you have any questions or would like to collaborate on a project, feel free to{' '}
                <Link to="/contact">reach out to me</Link>.
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
