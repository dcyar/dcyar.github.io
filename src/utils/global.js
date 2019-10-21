import moment from 'moment'
import siteConfig from '../../data/SiteConfig'

const formatDate = date => moment.utc(date).format(siteConfig.dateFormat)


export { formatDate }