import React from 'react';
import Icon from './Icon.jsx';
import accStyles from './css/IconBox.module.css'

const IconBox = (props) => {

  return (
    <div className={accStyles.iconBox}>
      <p className={accStyles.iconTitle}>{`${props.modelName} highlights`}</p>
      <div className={accStyles.threeIcons}>
        <Icon viewBox="0 0 512 512" text='Made With Merino Wool' content={`<g>
          <g>
            <path d="M497,0h-91c-24.813,0-45,20.187-45,45s20.187,45,45,45h15c16.262,0,30,14.196,30,31s-13.738,31-30,31h-14.963
              C364.37,96.675,299.242,62,226,62C101.383,62,0,162.935,0,287s101.383,225,226,225c124.724,0,225-101.256,225-225
              c0-37.262-9.005-73.138-25.971-105.154C456.106,179.729,481,153.024,481,121c0-32.896-26.584-61-60-61h-15
              c-8.271,0-15-6.729-15-15s6.729-15,15-15h91c8.284,0,15-6.716,15-15S505.284,0,497,0z M30,287c0-107.523,87.925-195,196-195
              c14.356,0,28.35,1.574,41.831,4.532C151.462,118.659,61,221.161,61,347c0,17.975,1.921,35.91,5.664,53.428
              C43.599,368.448,30,329.276,30,287z M114.575,447.33C98.946,416.042,91,382.31,91,347c0-124.065,100.935-225,225-225
              c4.842,0,9.722,0.162,14.557,0.47c13.233,8.439,25.385,18.429,36.197,29.713c-155.022,5.489-270.31,147.802-241.364,302.104
              C121.704,452.084,118.099,449.761,114.575,447.33z M226,482c-23.096,0-45.266-4.007-65.86-11.338
              c-12.103-41.11-12.496-86.376,0.656-129.365c59.416,20.745,101.494,73.037,108.999,135.654C255.605,480.259,240.928,482,226,482z
              M330.353,451.499c-9.979,6.334-20.532,11.775-31.527,16.236c-10.782-72.116-61.217-131.009-127.346-154.47
              c6.326-13.747,13.999-26.747,22.847-38.839C272.824,287.968,331,356.393,331,437C331,441.835,330.771,446.687,330.353,451.499z
              M390.319,391.972c-8.435,13.122-18.379,25.099-29.538,35.737c-4.026-85.347-63.222-157.547-144.383-179.141
              c12.623-12.715,26.75-23.933,42.089-33.366C335.598,230.52,391,297.695,391,377C391,381.992,390.763,387.011,390.319,391.972z
              M415.751,332.116c-14.898-62.983-59.516-113.088-117.503-136.262C322.491,186.898,348.684,182,376,182
              c4.843,0,9.712,0.169,14.552,0.478C409.821,212.707,421,248.571,421,287C421,302.215,419.252,317.346,415.751,332.116z"/>
          </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>`} />
        <Icon viewBox="0 -66 512.00035 512" text='Lightweight' content={'<path d="m461.285156 226.507812-76.492187-5.464843-50.554688-84.214844-25.273437-42.167969v-11.679687c.007812-12.675781-10.261719-22.957031-22.9375-22.964844-2.839844-.003906-5.65625.523437-8.300782 1.546875l-72.6875 28.039062 5.492188-18.433593c4.335938-15.496094-2.699219-31.921875-16.90625-39.476563l-57.035156-30.640625c-4.148438-2.226562-9.316406-.804687-11.742188 3.230469l-83.660156 133.96875-1.765625-1.023438c-4.226563-2.429687-9.621094-.96875-12.046875 3.257813-.054688.089844-.101562.179687-.152344.273437l-26.191406 49.308594c-2.257812 4.257813-.683594 9.535156 3.53125 11.867188l318.535156 176.550781c1.308594.722656 2.777344 1.101563 4.273438 1.101563h131.664062c29.238282-.027344 52.9375-23.722657 52.964844-52.964844v-45.65625c-.09375-28.609375-22.183594-52.328125-50.714844-54.457032zm-94.941406-1.890624-10.082031 3.363281-78.988281-102.699219 20.304687-15.246094zm-230.691406-204.03125 49.621094 26.632812c6.878906 3.636719 10.316406 11.550781 8.28125 19.058594l-7.292969 24.578125-50.671875-30.386719-17.546875-10.53125zm-52.265625 84.25 4.519531-7.0625 29.042969 21.601562c14.78125 11.097656 22.328125 29.375 19.683593 47.671875l-1.101562 25.511719-78.894531-45.472656zm375.648437 257.097656h-129.394531l-308.964844-171.257813 17.839844-33.542969 292.519531 168.3125c1.34375.773438 2.863282 1.179688 4.414063 1.175782h158.894531c0 19.5-15.808594 35.3125-35.308594 35.3125zm35.308594-52.96875h-156.539062l-60.546876-34.859375 20.355469-20.753907c3.363281-3.527343 3.230469-9.117187-.300781-12.480468-3.457031-3.296875-8.910156-3.242188-12.304688.121094l-23.550781 24.011718-33.546875-19.332031 33.644532-26.914063c3.804687-3.046874 4.421874-8.605468 1.375-12.414062-3.046876-3.804688-8.605469-4.421875-12.410157-1.375l-39.046875 31.242188-28.742187-16.527344 43.609375-36.34375c3.75-3.121094 4.257812-8.6875 1.140625-12.4375-3.121094-3.75-8.691407-4.257813-12.441407-1.140625l-48.621093 40.527343-13.648438-7.855468 1.429688-33.886719c3.269531-24.414063-6.960938-48.679687-26.71875-63.382813l-30.078125-22.363281 11.363281-17.839843 78.140625 46.882812c1.050781.605469 2.214844.980469 3.417969 1.105469.210937 0 .394531.070312.609375.085937.210937.019532.34375.0625.511718.0625 1.089844.003906 2.175782-.195312 3.195313-.589844l89.421875-34.488281c1.636719-.625 3.46875-.410156 4.917969.574219 1.453125.996094 2.316406 2.648438 2.304687 4.414062v9.710938l-31.78125 23.832031c-3.898437 2.929688-4.683594 8.464844-1.753906 12.359375.019531.027344.039062.054688.058594.078125l88.277344 114.761719c2.28125 2.988281 6.214843 4.191406 9.78125 2.992188l24.8125-8.273438 79.328124 5.667969c19.304688 1.429687 34.261719 17.46875 34.335938 36.828125zm0 0"/><path d="m52.964844 256h-44.136719c-4.875 0-8.828125 3.953125-8.828125 8.828125s3.953125 8.828125 8.828125 8.828125h44.136719c4.875 0 8.828125-3.953125 8.828125-8.828125s-3.953125-8.828125-8.828125-8.828125zm0 0"/><path d="m0 317.792969c0 4.875 3.953125 8.828125 8.828125 8.828125h114.757813c4.875 0 8.828124-3.953125 8.828124-8.828125s-3.953124-8.828125-8.828124-8.828125h-114.757813c-4.875 0-8.828125 3.953125-8.828125 8.828125zm0 0"/><path d="m220.691406 361.933594h-211.863281c-4.875 0-8.828125 3.949218-8.828125 8.824218s3.953125 8.828126 8.828125 8.828126h211.863281c4.875 0 8.824219-3.953126 8.824219-8.828126s-3.949219-8.824218-8.824219-8.824218zm0 0"/>'} />
        <Icon viewBox="0 0 443.294 443.294" text='Your 98% Of The Time Sneaker' content={'<path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/>'} />
      </div>
    </div>
  )
}

export default IconBox;