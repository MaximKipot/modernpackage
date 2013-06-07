#-------------------------------------------------------------------------------
#	GENERAL: Copyright Information
#-------------------------------------------------------------------------------
lib.copyright_information = COA
lib.copyright_information {
	10 = TEXT
	10 {
		data = date:U
		strftime = %Y
		noTrimWrap = || {LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:copyright}|
		noTrimWrap.insertData = 1
		typolink.parameter = {$plugin.theme_configuration.general.copyright_information.link}
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Logo
#-------------------------------------------------------------------------------
lib.general.logo = COA
lib.general.logo {
	10 = IMAGE
	10 {
		file = EXT:modernpackage/Resources/Public/Template/img/logo.png
		stdWrap.typolink.parameter = {$plugin.theme_configuration.url}
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Footer image
#-------------------------------------------------------------------------------
lib.footer_logo = COA
lib.footer_logo {
	stdWrap.wrap = <h1>|</h1>
	10 = IMAGE
	10 {
		file = EXT:modernpackage/Resources/Public/Template/img/logo-government-package-footer.png
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Header Navigation Pagename
#-------------------------------------------------------------------------------
lib.general.header.name = COA
lib.general.header.name {
	10 = TEXT
	10.value = {$plugin.theme_configuration.general.header.name}
	10.typolink {
		parameter = {$plugin.theme_configuration.url}
		ATagParams = class=brand
	}
}


#-------------------------------------------------------------------------------
#	GENERAL: Footer address
#-------------------------------------------------------------------------------
lib.general.footer.address = COA
lib.general.footer.address {
	wrap = <p>|</p>
	10 = TEXT
	10 {
		value = {$plugin.theme_configuration.general.footer.address}&nbsp;
		noTrimWrap = || |
	}
	50 = TEXT
	50 {
		value = {$plugin.theme_configuration.general.footer.email}
		typolink.parameter = {$plugin.theme_configuration.general.footer.email}
	}
}
