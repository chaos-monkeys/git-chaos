// const Author = (author, index) => {
//   const image = (
//     <>
//       <div className="author_image">
//         <Image path={author.image} />
//       </div>
//     </>
//   )

//   const bio = (
//     <>
//       <div className="author_name">
//         <h2>{author.name}</h2>
//         <p>{author.description}</p>
//       </div>
//     </>
//   )

//   const first = index % 2 === 0 ? image : bio
//   const second = index % 2 === 0 ? bio : image

//   return (
//     <>
//       <div className="padding">
//         <div className="author">
//           {first}
//           {second}
//         </div>
//       </div>
//     </>
//   )
// }

// const Grid = ({ data }) => {
//   const authors = [
//     {
//       name: "Robert Balaban",
//       description:
//         "Art Director & Photographer based in Chile. She loves crime books and in another life she would definitely be a forensic scene investigation scientist.",
//     },
//     {
//       name: "Ollie Williams",
//       description:
//         "Ollie Williams is a developer based in London, who makes cool things at IBM and previously at Edelman Deportivo.",
//     },
//   ]

//   const component = authors.map((author, index) => Author(author, index))

//   return (
//     <>
//       <div>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <p className="padding">{data.site.siteMetadata.description}</p>
//       </div>
//       {component}
//     </>
//   )
// }
