import moment from 'moment'
import siteConfig from '../../data/siteConfig'

const formatDate = date => moment.utc(date).format(siteConfig.dateFormat)


export { formatDate }