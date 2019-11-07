import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

import Categories from 'src/pages/Categories.vue'
import CategorieDetails from 'src/pages/CategorieDetails.vue'
import StarredPosts from 'src/pages/StarredPosts.vue'
import UpcomingPosts from 'src/pages/UpcomingPosts.vue'
import PreviouslyPosted from 'src/pages/PreviouslyPosted.vue'
import Drafts from 'src/pages/Drafts.vue'
import Login from 'src/pages/Login.vue'

const routes = [
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/',
    component: Login,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Categories
      },
      {
        path: 'category-details',
        name: 'category-details',
        component: CategorieDetails
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: Drafts
      },
      {
        path: 'starred-posts',
        name: 'starred-posts',
        component: StarredPosts
      },
      {
        path: 'upcoming-posts',
        name: 'upcoming-posts',
        component: UpcomingPosts
      },
      {
        path: 'previously-posted',
        name: 'previously-posted',
        component: PreviouslyPosted
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
