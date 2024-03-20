<p align="center">
  <a href="https://sydrawat.netlify.app">
    <img alt="sydrawat" src="./src/images/stickie.svg" width="60" />
  </a>
</p>
<h1 align="center">
  sydrawat
</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea482c58-e733-4ed9-a52d-c3bf14748b0b/deploy-status)](https://app.netlify.com/sites/sydrawat/deploys)

This is my personal profile/blog where I write down my thought and notes about the interesting stuff I'm learning about the web everyday!

> \[!IMPORTANT]\
> This website is using an older build of GatsbyJS, so in order to run this project successfully, you'll need Node v14.21.3

## :rocket: Quick start

1. **Clone the repo**

   ```shell
   git clone https://github.com/sydrawat/sydrawat.git
   ```

2. **Install dependencies**

   Navigate into the site’s directory and install the dependencies.

   ```shell
   yarn install
   ```

3. **Start developing.**

   ```shell
   cd sydrawat/
   yarn develop
   ```

4. **View your site!**

   The site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link:_`http://localhost:8000/___graphql`_. This is the GraphiQL tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

> NOTE : For deployment, follow the [Gatsby AWS S3 guide](https://www.gatsbyjs.org/docs/deploying-to-s3-cloudfront/) for more detailed steps on how to deploy the site on AWS. If you're looking for different resources to deploy/host your site, have a look [here](https://www.gatsbyjs.org/docs/deploying-and-hosting/).

## :whale: Containerization

The containerized image of this personal website is available on [hub.docker.com/r/sydrawat/sydrawat.dev](https://hub.docker.com/r/sydrawat/sydrawat.dev/tags). In order to use this locally, or to deploy this on a Kubernetes cluster, make sure you use the appropriate image and tag names.

1. **Local Development with Docker**

   ```bash
   docker pull sydrawat/sydrawat.dev:<tag>
   # docker pull sydrawat/sydrawat.dev:latest
   ```

2. **Run the container locally**

   ```bash
   # The -p option exposes the application running on port 8000 on the container
   # to port 8000 on the host machine running the container
   docker run -p 8000:8000 sydrawat/sydrawat.dev
   ```

   The application should now be accessible on [http://localhost:8000](http://localhost:8000)

3. **Deployment on Kubernetes**

   Deployment on Kubernetes can vary, depending on how you want your application to be available. This is a simple example on how to run the website, which is containerized, as a Pod on a Kubernetes cluster.

   ```bash
   kubectl run sydrawat --image=sydrawat/sydrawat.dev:latest
   ```

   Next, we need to expose the application on a `NodePort`:

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     labels:
       app: sydrawat-svc
     name: sydrawat-svc
     namespace: default
   spec:
     ports:
     - name: 8000-8000
       nodePort: 31136
       port: 8000
       protocol: TCP
       targetPort: 8000
     selector:
       run: sydrawat
     type: NodePort
   ```

   You can now test the application running on http://<node-ip>:31136
   To identify what node your Pod is running on, use:

   ```bash
   kubectl get pods -o wide # identify the node on which this pod is running
   kubectl get nodes -o wide # get the node-ip
   ```

## :busts_in_silhouette: Acknowledgements

- Ruben Harutyunyan - [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter/tree/master/content)
- Tania Rascia - Heavy inspiration from [taniarascia.com](https://taniarascia.com) [[source]](https://github.com/taniarascia/taniarascia)
- Muhammad Muhsin - [Using React Context API with Gatsby](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/)
- Thomas Wang - [How to convert an existing Gatsby blog to use MDX](https://www.gatsbyjs.org/blog/2019-11-21-how-to-convert-an-existing-gatsby-blog-to-use-mdx/)

## :bust_in_silhouette: Author

- :feelsgood: [Siddharth Rawat](https://sydrawat.netlify.app)

## :page_with_curl: License

This project is open source and available under the [MIT License](./LICENSE).

## :nut_and_bolt: Creating Issues :wrench:

Before you create an issue, please go through the [Code of Conduct](https://github.com/sydrawat/sydrawat-issues/blob/master/CODE_OF_CONDUCT.md) and follow the structure of [template](https://github.com/sydrawat/sydrawat-issues/tree/master/.github/ISSUE_TEMPLATE) provided for raising an issue.

Thanks for reporting the problem!

##### &copy; 2024, Siddharth Rawat
