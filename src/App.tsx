import React, { useState } from 'react';
import Layout from './components/Layout';
import EditModeToggle from './components/EditModeToggle';
import EditableSection from './components/EditableSection';
import LayoutModal from './components/LayoutModal';
import { HomeLayout1, HomeLayout2, HomeLayout3 } from './layouts/HomeLayouts';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedLayouts, setSelectedLayouts] = useState({
    home: 'layout1',
    about: 'layout1',
    services: 'layout1',
    team: 'layout1',
    contact: 'layout1'
  });

  const renderHomeLayout = () => {
    switch (selectedLayouts.home) {
      case 'layout2':
        return <HomeLayout2 />;
      case 'layout3':
        return <HomeLayout3 />;
      default:
        return <HomeLayout1 />;
    }
  };

  const handleLayoutSelect = (section: string, layoutId: string) => {
    setSelectedLayouts(prev => ({
      ...prev,
      [section]: layoutId
    }));
  };

  return (
    <Layout>
      <EditModeToggle
        isEditMode={isEditMode}
        onToggle={() => setIsEditMode(!isEditMode)}
      />

      <LayoutModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        section={activeModal || ''}
        layouts={[]}
        onSelectLayout={(layoutId) => handleLayoutSelect(activeModal!, layoutId)}
      />

      <EditableSection
        id="home"
        isEditMode={isEditMode}
        onEditClick={() => setActiveModal('home')}
      >
        {renderHomeLayout()}
      </EditableSection>

      <EditableSection
        id="about"
        isEditMode={isEditMode}
        onEditClick={() => setActiveModal('about')}
      >
        <About />
      </EditableSection>

      <EditableSection
        id="services"
        isEditMode={isEditMode}
        onEditClick={() => setActiveModal('services')}
      >
        <Services />
      </EditableSection>

      <EditableSection
        id="team"
        isEditMode={isEditMode}
        onEditClick={() => setActiveModal('team')}
      >
        <Team />
      </EditableSection>

      <EditableSection
        id="contact"
        isEditMode={isEditMode}
        onEditClick={() => setActiveModal('contact')}
      >
        <Contact />
      </EditableSection>
    </Layout>
  );
}

export default App;