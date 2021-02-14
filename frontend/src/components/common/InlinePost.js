import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'


const InlinePost = ({ post }) => {
  const url = `/${post.slug}/`
  post.tags = [
    {name: 'Getting Started'},
    {name: 'Blogging'},
    {name: 'East West'},
  ]
  return (
    <Link to={url} className='inline-post'>
      <section className='inline-post__container'>
        <div className='inline-post__img'>
          <img src={post.feature_image}/>
        </div>
        <div className='inline-post__info'>
          <h3>{ post.title }</h3>
          <p className='inline-post__excerpt'>
            { post.excerpt }
          </p>
          <ul className='inline-post__tags'>
            {
              post.tags.map((t) => {
                return (
                    <li className='inline-post__tag'>{t.name}</li>
                  )
              })
            }
          </ul>
        </div>
      </section>
    </Link>
  )
}



InlinePost.propTypes = {
  post: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      featured: PropTypes.bool,
      tags: PropTypes.arrayOf(
          PropTypes.shape({
              name: PropTypes.string,
          })
      ),
      excerpt: PropTypes.string.isRequired,
      primary_author: PropTypes.shape({
          name: PropTypes.string.isRequired,
          profile_image: PropTypes.string,
      }).isRequired,
  }).isRequired,
}

export default InlinePost
