import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Panel, Cell } from 'zarm';
import { components } from '@site/site.config';
import { pascalCase } from 'change-case';
import Container from '@site/demo/components/Container';
import Footer from '@site/demo/components/Footer';
import Context from '@site/utils/context';
import Events from '@site/utils/events';
import Locale from '@site/locale';
import './style.scss';

const Child = () => {
  const history = useHistory();
  const { lang } = useContext(Context);

  const getMenus = (key) => {
    const list = components[key] || [];

    return (
      <Panel title={(
        <>
          <FormattedMessage id={`app.components.type.${key}`} />
          （{list.length}）
        </>
      )}
      >
        {
          list
            .sort((a, b) => {
              return a.key.localeCompare(b.key);
            })
            .map((component, i) => (
              <Cell
                hasArrow
                key={+i}
                title={(
                  <div className="menu-item-content">
                    <span>{pascalCase(component.key)}</span>
                    {lang !== 'enUS' && <span className="chinese">{component.name}</span>}
                  </div>
                )}
                onClick={() => history.push(`/${component.key}`)}
              />
            ))
        }
      </Panel>
    );
  };

  return (
    <IntlProvider locale="zh-CN" messages={Locale[lang]}>
      <header>
        <section className="brand">
          <div className="brand-title">Zarm</div>
          <div className="brand-description"><FormattedMessage id="app.title" /></div>
        </section>
      </header>
      <main>
        {getMenus('general')}
        {getMenus('form')}
        {getMenus('feedback')}
        {getMenus('view')}
        {getMenus('navigation')}
        {getMenus('other')}
      </main>
      <Footer />
    </IntlProvider>
  );
};

const Page = () => {
  const setPageScroll = () => {
    window.sessionStorage.indexPageScroll = window.scrollY;
  };

  const loadPageScroll = () => {
    const scrollY = window.sessionStorage.indexPageScroll;
    if (!scrollY) return;
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    loadPageScroll();
    Events.on(window, 'scroll', setPageScroll);

    return () => {
      Events.off(window, 'scroll', setPageScroll);
    };
  }, []);

  return (
    <Container className="index-page">
      <Child />
    </Container>
  );
};

export default Page;
