import "../node_modules/react-modal-video/css/modal-video.css"
import { Inter, Jost } from 'next/font/google'
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/common-style.css"
import "/public/assets/css/dark-mode.css"
import "/public/assets/css/line-awesome.min.css"
import "/public/assets/css/main.css"
import "/public/assets/css/posty-color.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/venobox.min.css"


const inter = Inter({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--body-font",
	display: 'swap',
})

const jost = Jost({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--secondary-font",
	display: 'swap',
})


export const metadata = {
	title: 'Cosmopolink Magazine ',
	description: 'Discover the best of the world with Costmopolink Magazine', 
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${jost.variable}`}>
				{children}
			</body>
		</html>
	)
}