import React, { useState, SyntheticEvent } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Hero } from "../../models/hero";
import { addHeroAction } from "../../redux/actions/hero.actions";

interface HeroListAddHeroProps {
  showModal: boolean;
  toggleModal: any;
  addHero?: any;
}

const heroInitial: Hero = { name: "" };

const HeroListAddHero: React.FC<HeroListAddHeroProps> = ({
  showModal,
  toggleModal,
  addHero,
}) => {
  const [formHero, setFormHero] = useState(heroInitial);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (event: SyntheticEvent | any): void => {
    const { value, name } = event.target;
    setFormHero({ ...formHero, [name]: value });
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    setIsSaving(true);
    addHero(formHero).subscribe({
      next: () => {
        toast.success("Hero added");
        setFormHero(heroInitial);
        setTimeout(() => {
          setIsSaving(false);
          toggleModal(false);
        }, 2000);
      },
      error: () => {
        toast.error("Oooops");
        setFormHero(heroInitial);
        setTimeout(() => {
          setIsSaving(false);
          toggleModal(false);
        }, 2000);
      },
    });
  };

  return (
    <Modal show={showModal} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>Add Hero</Modal.Header>
        <Modal.Body>
          <Form.Group controlId="hero-name">
            <Form.Label>Hero Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Hero Name"
              value={formHero.name}
              name="name"
              onChange={handleChange}
            ></Form.Control>
            <Form.Text className="text-muted">Required</Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => toggleModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

const mapDispatchToProps = {
  addHero: addHeroAction,
};

export default connect(undefined, mapDispatchToProps)(HeroListAddHero);
